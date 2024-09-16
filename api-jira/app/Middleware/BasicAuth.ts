import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { GuardsList } from '@ioc:Adonis/Addons/Auth'
import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RouteMiddlewareHandler } from '@ioc:Adonis/Core/Route'
import { AxiosService } from 'sim-node-lib/dist/Services/AxiosService'

export default class BasicAuthMiddleware {
  protected async authenticate(
    _auth: HttpContextContract['auth'],
    roles: RouteMiddlewareHandler[] | undefined,
    _guards: (keyof GuardsList)[],
    base64Credentials: string
  ): Promise<boolean> {
    const params = {
      Authorization: base64Credentials,
      Roles: roles,
    }
    const url = Env.get('URL_APIAUTENTICACAO')
    return await new AxiosService(url)
      .authSim()
      .get(params)
      .then((response) => {
        if (response.status === 200) {
          return true
        } else {
          throw new AuthenticationException('Unauthorized access', 'E_UNAUTHORIZED_ACCESS')
        }
      })
      .catch((_e) => {
        console.error(_e)
        throw new AuthenticationException('Unauthorized access', 'E_UNAUTHORIZED_ACCESS')
      })
  }

  /**
   * Handle request
   */
  public async handle(
    { request, auth }: HttpContextContract,
    next: () => Promise<void>,
    customGuards: (keyof GuardsList)[]
  ): Promise<void> {
    if (
      !request.request.headers.authorization ||
      request.request.headers.authorization.toLowerCase().indexOf('basic ') === -1
    ) {
      throw new AuthenticationException('Missing Authorization Header', 'E_UNAUTHORIZED_ACCESS')
    }
    const role = request.ctx?.route?.middleware

    const base64Credentials = request.request.headers.authorization.split(' ')[1]

    const guards = customGuards.length ? customGuards : [auth.name]
    await this.authenticate(auth, role, guards, base64Credentials)
    await next()
  }
}
