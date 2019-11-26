import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field'


const MaterialComponents =[
  MatButtonModule,MatStepperModule,MatFormFieldModule,MatAutocompleteModule,MatCheckboxModule,MatDatepickerModule,MatInputModule,
  MatRadioModule,MatSelectModule,MatSliderModule,MatSlideToggleModule,MatMenuModule,MatSidenavModule,MatToolbarModule,MatCardModule,
  MatDividerModule,MatExpansionModule,MatGridListModule,MatListModule,MatTabsModule,MatIconModule,
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
