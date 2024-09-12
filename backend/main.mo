import Error "mo:base/Error";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Random "mo:base/Random";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";

actor {
  // Stable variables
  stable var aboutMe : Text = "Behold, the magnificent Mr. DFINITY, a purveyor of puns, a connoisseur of cat videos, and a self-proclaimed expert in the art of procrastination. Armed with a keyboard and an endless supply of coffee, Mr. DFINITY embarks on a quest to conquer the internet, one hilarious blog post at a time.";

  stable var funFacts : [Text] = [
    "Once won a staring contest against a goldfish.",
    "Can recite the entire script of 'Monty Python and the Holy Grail' backward.",
    "Has a collection of over 100 rubber ducks, each with its own unique personality."
  ];

  stable var projects : [(Text, Text, ?Text)] = [
    ("The Ultimate Pillow Fort", "A fortress of fluffy pillows designed to withstand any and all boredom attacks.", null),
    ("The World's Largest Collection of Mismatched Socks", "A testament to my unwavering commitment to laundry rebellion.", null)
  ];

  stable var quotes : [Text] = [
    "Why be a knight in shining armor when you can be a developer in fuzzy slippers?",
    "I don't always test my code, but when I do, I do it in production.",
    "May the fork be with you."
  ];

  // Mutable variable
  var moodMeter : Nat = 5;

  // Query functions
  public query func getAboutMe() : async Text {
    aboutMe
  };

  public query func getFunFacts() : async [Text] {
    funFacts
  };

  public query func getProjects() : async [(Text, Text, ?Text)] {
    projects
  };

  public func getRandomQuote() : async Text {
    let seed = await Random.blob();
    let randomGenerator = Random.Finite(seed);
    switch (randomGenerator.range(Nat8.fromNat(quotes.size()))) {
      case null { "Error generating random quote" };
      case (?index) { quotes[index] };
    }
  };

  public func getMoodMeter() : async Nat {
    moodMeter
  };

  // Update functions
  public func updateMoodMeter(newMood : Nat) : async () {
    if (newMood >= 0 and newMood <= 10) {
      moodMeter := newMood;
    };
  };
}
