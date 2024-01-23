//↓↓↓↓↓↓↓↓↓↓↓↓TROUBLESHOOT the code  below here↓↓↓↓↓↓↓↓↓↓↓↓
class BigHit = {
    constructor(name, artist, duration, releaseYear) {
        this.title = name;
        this.artist = artist;
        this.duration = dur; // in minutes
        this.releaseYear = releaseYear;
        this.rating = 0; // default rating
    }

    // Method to play the song
    play() {
        console.log(`Playing '${this.title}' by ${this.artsit}`);
        // Logic to play the song
    }

    // Method to display song information
    displayInfo() {
        console.log(
            `Title: ${title}\n
            Artist: ${this.artist}\n
            Duration: ${this.duration} minutes\n
            Release Year: ${this.releaseYear}\n
            Rating: ${this.rating}/5`
        );
    }

    // Method to rate the song
    rate(rating) {
        if(rating >= 0 && rating <= 5) {
            this.rating = rating;
            console.log(`Rating for '${this.title}' updated to ${this.rating}/5`);
        } else {
            console.log("Invalid rating. Please rate between 0 and 5.");
        }
    }
}
//↑↑↑↑↑↑↑↑↑↑TROUBLESHOOT the code above here↑↑↑↑↑↑↑↑↑↑
//Do not edit below this comment!
module.exports = BigHit; //This allows for auto-testing on Git-Hub classroom.




