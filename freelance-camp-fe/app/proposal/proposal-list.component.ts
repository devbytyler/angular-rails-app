import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'abc company', 'http://tylerstephensweb.com', 'ruby on rails', 150, 120, 15, 'tylerstephens814@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'abcxyz company', 'http://tylerstephensweb.com', 'ruby on rails', 150, 120, 15, 'tylerstephens814@gmail.com')
  proposalThree: Proposal = new Proposal(300, 'Something company', 'http://tylerstephensweb.com', 'ruby on rails', 150, 120, 15, 'tylerstephens814@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}