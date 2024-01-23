const BigHit = require("./script.js");

const mySong = new BigHit("No1", "Dr. Wells",72, 2024 );

describe("BigHit Fixed", () => {
  test("BigHit exists", () => {
    expect(mySong).toBeInstanceOf(BigHit);
  });
  test('BigHit takes 4 parameters when being created', ()=>{
    expect(BigHit.length).toBe(4);
  })
  test("BigHit has a property called 'title'", () => {
    expect(mySong).toHaveProperty("title");
  });
  test("BigHit has a property called 'artist'", () => {
    expect(mySong).toHaveProperty("title");
  });
  test("BigHit has a property called 'duration'", () => {
    expect(mySong).toHaveProperty("duration");
  });
  test("BigHit has a property called 'releaseYear'", () => {
    expect(mySong).toHaveProperty("releaseYear");
  });
  beforeEach(() => {
    // Spy on console.log before each test
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    console.log.mockRestore();
  });
  test('.play() works correctly', () => {
    // Function that logs something


    // Call the function
    mySong.play()

    expect(console.log).toHaveBeenCalledWith(`Playing 'No1' by Dr. Wells`);
  });
  test('.rate() works correctly', () => {
    // Function that logs something


    // Call the function
    mySong.rate(5)

    expect(console.log).toHaveBeenCalledWith(`Rating for 'No1' updated to 5/5`);
  });
  test('.displayInfo works correctly', () => {
    mySong.displayInfo()

    expect(console.log).toHaveBeenCalledWith(
        `Title: No1\n
            Artist: Dr. Wells\n
            Duration: 72 minutes\n
            Release Year: 2024\n
            Rating: 5/5`);
  });
});


