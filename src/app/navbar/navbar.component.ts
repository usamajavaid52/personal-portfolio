import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  activeSection: string = 'about'; // Default active section
  isMenuOpen: Boolean = false

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Logic to determine active section based on scroll position
    const aboutSection = document.getElementById('about');
    const experiencesSection = document.getElementById('experiences');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');

    if (aboutSection && window.scrollY >= aboutSection.offsetTop - 100) {
      this.activeSection = 'about';
    }
    if (experiencesSection && window.scrollY >= experiencesSection.offsetTop - 100) {
      this.activeSection = 'experiences';
    }
    if (educationSection && window.scrollY >= educationSection.offsetTop - 100) {
      this.activeSection = 'education';
    }
    if (skillsSection && window.scrollY >= skillsSection.offsetTop - 100) {
      this.activeSection = 'skills';
    }
  }

  setActive(section: string) {
    this.activeSection = section;
    this.closeMenu(); // Close the menu when a link is clicked
  }



  closeMenu() {
    console.log("ye b chal rha ha ?")
    if (window.innerWidth <= 890) {
      this.isMenuOpen = false;
    }
  }

  downloadPDF() {
    const pdfUrl = 'assets/usamajavaid.pdf'; // Replace with your actual PDF file path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'usama_cv.pdf'); // Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
