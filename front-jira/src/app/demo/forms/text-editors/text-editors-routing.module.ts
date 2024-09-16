// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'quill-editor',
        loadChildren: () => import('./quill-editor/quill-editor.module').then((e) => e.QuillEditorModule)
      },
      {
        path: 'editor',
        loadComponent: () => import('./editor/editor.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextEditorsRoutingModule {}
