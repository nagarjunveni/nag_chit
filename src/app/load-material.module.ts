import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from '@angular/material/table';


const modules = [MatToolbarModule,
                MatExpansionModule,
                MatDividerModule,
                MatTableModule];

@NgModule({
    imports:modules,
    exports:modules
})
export class LoadMaterialComponents {

}