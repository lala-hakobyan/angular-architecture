import { OrdinalDatePipe } from './ordinal-date-pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalDatePipe();
    expect(pipe).toBeTruthy();
  });
});
