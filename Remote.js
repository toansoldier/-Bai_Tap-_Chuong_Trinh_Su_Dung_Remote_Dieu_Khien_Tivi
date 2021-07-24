class Remote {
    channel;

    changeChannel(channel, Tivi) {
        Tivi.changeChannel(channel);
    }

    volumeUp(Tivi) {
        Tivi.volumeUp();
    }

    volumeDown(Tivi) {
        Tivi.volumeDown();
    }

    turnOnTv(Tivi) {
        Tivi.turnOn();
    }

    turnOffTv(Tivi) {
        Tivi.turnOff();
    }

    aboutTv(Tivi) {
        Tivi.toStringTv();
    }
}