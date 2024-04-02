import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ink } from './inkData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ink-amount',
  templateUrl: './ink-amount.component.html',
  styleUrls: ['./ink-amount.component.scss']
})
export class InkAmountComponent {
  printingForm!: FormGroup;
  inkDensity: number = 1.0;
  data = ink;
  label2: string = 'การคำนวนปริมาณหมึกพิมพ์ ในการพิมพ์งานฉลาก';
  label1: string = 'การคำนวนปริมาณหมึกพิมพ์ ในการพิมพ์ฟิล์ม';
  header1: string = 'from CM3/m2';
  header2: string = 'from BCM';

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.printingForm = this.formBuilder.group({
      bcm: ['', Validators.required],
      jobName: ['', Validators.required],
      webWidth: ['', Validators.required],
      length: ['', Validators.required],
      inkCoverage: ['', Validators.required],
      waste: ['', Validators.required],
      quantity: [''],
      inkTransfer: ['', Validators.required],
      area: [{ value: '', disabled: true }, Validators.required],
      inkToBePrepared: [{ value: '', disabled: true }],
      date: [new Date()],
      mode: 2
    });

    this.printingForm.controls['webWidth'].valueChanges.subscribe((value) => {
      if (value && this.printingForm.controls['length'].value) {
        if (this.mode == 2) {
          this.printingForm.controls['area'].setValue((this.printingForm.controls['webWidth'].value * this.printingForm.controls['length'].value) / 1000000);
        } else {
          this.printingForm.controls['area'].setValue(this.printingForm.controls['length'].value * (this.printingForm.controls['webWidth'].value / 1000));
        }
      }
    })

    this.printingForm.controls['length'].valueChanges.subscribe((value) => {
      if (value && this.printingForm.controls['length'].value) {
        if (this.mode == 2) {
          this.printingForm.controls['area'].setValue((this.printingForm.controls['webWidth'].value * this.printingForm.controls['length'].value) / 1000000);
        } else {
          this.printingForm.controls['area'].setValue(this.printingForm.controls['length'].value * (this.printingForm.controls['webWidth'].value / 1000));
        }
      }
    })

    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.loadData(id);
      }
    });
  }

  get mode() {
    return this.printingForm.get('mode')?.value;
  }

  save() {
    if (this.mode == 2) {
      let { bcm, webWidth, length, inkCoverage, waste, inkTransfer, quantity } = this.printingForm.value;

      let area = webWidth * (length / 1000);

      let inkAmount = ((area * quantity) * (inkCoverage / 100) * ((100 + waste) / 100) * bcm * (inkTransfer / 100)) / 1000;
      let result = inkAmount / 1000;

      this.printingForm.patchValue({
        inkToBePrepared: result.toFixed(2)
      });

      console.log(this.printingForm.value);
      this.data.push(this.printingForm.value);
    } else {
      let { bcm, webWidth, length, inkCoverage, waste, inkTransfer, quantity } = this.printingForm.value;

      let area = webWidth * (length / 1000);

      let inkAmount = ((area) * (inkCoverage / 100) * ((100 + waste) / 100) * bcm * (inkTransfer / 100)) / 1000;

      this.printingForm.patchValue({
        inkToBePrepared: inkAmount.toFixed(2)
      });

      console.log(this.printingForm.value);
      this.data.push(this.printingForm.value);
    }
  }
  reset() {
    this.resetForm();
  }

  modeS() {
    if (this.mode == 1) {
      this.printingForm.get('mode')?.patchValue(2);
    } else {
      this.printingForm.get('mode')?.patchValue(1);
    }
    this.resetForm();
  }

  resetForm() {
    Object.keys(this.printingForm.controls).forEach(controlName => {
      if (controlName !== 'mode') {
        this.printingForm.get(controlName)?.setValue(null);
      }
    });
  }


  loadData(id: number): void {
    const data = this.data.find(item => item.id == id);
    if (data) {
        this.printingForm.patchValue(data as any);
    } else {
        console.error('Item with ID', id, 'not found in data:', this.data);
    }
}

}
