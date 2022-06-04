import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopicLabels } from '../../enums';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  topicLabels: typeof TopicLabels;

  constructor(private formBuilder: FormBuilder) {
    this.topicLabels = TopicLabels;

    this.contactForm = this.generateContactForm();
  }

  ngOnInit(): void {
  }

  onSubmitButtonClicked(): void {
    if (this.contactForm.valid) {
      console.log('Form submited>>>', this.contactForm.value);
      // TODO: Обикновено се прави заявка към сървъра.
    } 
    else {
      this.contactForm.markAllAsTouched();
    }
  }

  private generateContactForm(): FormGroup {
    let topicTypeFormControl = this.formBuilder.control<number | null>(null, [Validators.required]);
    let messageFormControl = this.formBuilder.control<string | null>(null, [Validators.required]);

    return this.formBuilder.group({
      topic: topicTypeFormControl,
      message: messageFormControl
    });
  }

}
