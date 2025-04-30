import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../../services/admin/admin-service.service';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrl: './add-party.component.css'
})
export class AddPartyComponent {
  partyForm: FormGroup;
  selectedCandidateImage: File | null = null;
  selectedPartySymbol: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminServiceService
  ) {
    this.partyForm = this.fb.group({
      partyName: ['', Validators.required],
      candidateName: ['', Validators.required]
    });
  }

  onCandidateImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedCandidateImage = file;
    }
  }

  onPartySymbolSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedPartySymbol = file;
    }
  }

  addParty() {
    if (!this.selectedCandidateImage || !this.selectedPartySymbol) {
      console.error('Both files are required.');
      return;
    }

    const partyDto = this.partyForm.value;

    this.service
      .postParty(partyDto, this.selectedPartySymbol, this.selectedCandidateImage)
      .subscribe((res) => {
        console.log(res);
        if (res.status === 'success') {
          // Navigate or show success message
        }
      });
  }
}
