import { Component } from '@angular/core'
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard'
  documents: Document[] = [
    {
      title: "My first Doc", 
      description: 'asdfasdfdfgsdfg',
      file_url: 'https://google.com',
      updated_at: '11/11/16',
      image_url:  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1024px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My second Doc", 
      description: 'asdfasdfdfgsdfg',
      file_url: 'https://google.com',
      updated_at: '11/11/16',
      image_url:  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1024px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My last Doc", 
      description: 'asdfasdfdfgsdfg',
      file_url: 'https://google.com',
      updated_at: '11/11/16',
      image_url:  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1024px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
  ]
}