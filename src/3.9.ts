{
  // abstraction
  interface Player1 {
    start(): void;
    next(): void;
    previous(): void;
    pause(): void;
  }
  // real implementation
  class MusicPlayer1 implements Player1 {
    start(): void {
      console.log(`Start A new song`);
    }
    next(): void {
      console.log(`next button clicked for changing song`);
    }
    previous(): void {
      console.log(`get back to my previous song`);
    }
    pause(): void {
      console.log(`now time is prayer time. so i pause my music`);
    }
    test() {
      console.log(`All ok to my music player`);
    }
  }
  // generally created instance of MusicPlayer1 class
  const musicPlayer = new MusicPlayer1();
  console.log(musicPlayer.start());
  // abstract class
  // abstract class does'nt create instance. this is only shape of child class
  // for example:
  // idea
 abstract class Player2 {
    abstract start(): void;
    abstract next(): void;
    abstract previous(): void;
    abstract pause(): void;
    test() {
      console.log(`All ok to my music player`);
    }
  }

  // Cannot create an instance of an abstract class.
  // const musicPlayer2 = new MP3()
  class MusicPlayer2 extends Player2 {
    start(): void {
      console.log(`Start A new song`);
    }
    next(): void {
      console.log(`next button clicked for changing song`);
    }
    previous(): void {
      console.log(`get back to my previous song`);
    }
    pause(): void {
      console.log(`now time is prayer time. so i pause my music`);
    }
    test(): void {
        console.log(`All ok to my music player`);
    }
  }

  const musicPlayer2 = new MusicPlayer2()
  console.log(musicPlayer);
}
