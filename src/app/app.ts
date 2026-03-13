import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CV_DATA } from './cv-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.theme-dark]': 'isDark()',
    '[class.theme-light]': '!isDark()',
  },
})
export class App {
  protected readonly isDark = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
  protected readonly cv = CV_DATA;

  protected readonly skillCategories = Object.entries(CV_DATA.skills).map(([name, items]) => ({
    name,
    items,
  }));

  protected readonly memberSince = (() => {
    const [year, month] = CV_DATA.basics.toptalMemberSince.split('-');
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  })();

  protected expTech(entry: string): string {
    return entry.split(' - ')[0];
  }

  protected expYears(entry: string): string {
    return entry.split(' - ')[1] ?? '';
  }

  protected toggleTheme(): void {
    this.isDark.update(v => !v);
  }

  protected print(): void {
    window.print();
  }
}
