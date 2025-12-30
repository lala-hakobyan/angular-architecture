import {ChangeDetectionStrategy, Component, computed, Input, OnDestroy, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Countdown implements OnInit, OnDestroy {
  @Input() targetDateStr: string = '2025-12-31T23:59:59';

  private now = signal(Date.now());

  private get targetTime() {
    return new Date(this.targetDateStr).getTime();
  }

  // Computed Signals: Updates automatically when 'now' changes
  private remaining = computed(() => Math.max(0, this.targetTime - this.now()));

  days = computed(() =>
    String(Math.floor(this.remaining() / (1000 * 60 * 60 * 24))).padStart(2, '0')
  );

  hours = computed(() =>
    String(Math.floor((this.remaining() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')
  );

  minutes = computed(() =>
    String(Math.floor((this.remaining() % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
  );

  seconds = computed(() =>
    String(Math.floor((this.remaining() % (1000 * 60)) / 1000)).padStart(2, '0')
  );

  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.now.set(Date.now());
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
