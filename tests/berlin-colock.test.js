const berlinClock = require('../berlin-clock/berlin-clock');

describe ("Berlin clock should show", () => {
  it ("should display correct hour for 00:00:00", () => {
    expect(berlinClock.convert("00:00:00")).toBe(`""""
    Y 
    OOOO
    OOOO
    OOOOOOOOOOO
    OOOO
    """`);
  });

  it ("shold display correct hour for 13:17:01", () => {
    expect(berlinClock.convert("13:17:01")).toBe(`"""
    O
    RROO
    RRRO
    YYROOOOOOOO
    YYOO
    """`);
  });

  it ("should display correct hour for 23:59:59", () => {
    expect(berlinClock.convert("23:59:59")).toBe(`"""
    O
    RRRR
    RRRO
    YYRYYRYYRYY
    YYYY
    """`);
  });

  it ("should display correct hour for 24:00:00", () => {
    expect(berlinClock.convert("23:59:59")).toBe(`"""
    Y
    RRRR
    RRRR
    OOOOOOOOOOO
    OOOO
    """`);
  });
  
})