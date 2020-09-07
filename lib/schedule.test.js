// Import classes 
const Schedule = require('./schedule.js');

describe('Schedule', () => {
    const minutesSchedule = new Schedule();
    it('tests for free minutes in the schedule', () => {
        expect(minutesSchedule.nextOpenMinute()).toEqual(0);
    });

    it('tests for freeWindow in the schedule', () => {
        expect(minutesSchedule.freeWindow(2, 10)).toEqual(true);
    });

    it('tests that clear schedule changes minutes back to false', () => {
        expect(minutesSchedule.clear()).toEqual([...Array(1440).fill(false)]);
    });

    it('tests that it prints the schedule using free or busy', () => {
        expect(minutesSchedule.print()).toEqual(console.log([...Array(1440).fill('free')]));
    });

    // it('tests that the order fills the schedule according to startMinute and deliveryMinute', () => {
    //     expect(minutesSchedule.addOrder(10, 20)).toEqual();
    // })
});
