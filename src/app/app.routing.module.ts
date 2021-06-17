import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { NotesComponent } from './components/notes/notes.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'notes', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
