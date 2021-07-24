class Tivi {
    channel = 1;
    volume = 5;
    status = false;

    getChannel() {
        return this.channel;
    }

    getVolume() {
        return this.volume;
    }

    getStatus() {
        return this.status;
    }

    changeChannel(channel) {
        if (channel > 0 && channel <= 15)
            this.channel = channel;
        else alert("not channel " + channel);
    }

    volumeUp() {
        if (this.status && this.volume < 10)
            this.volume++;
    }

    volumeDown() {
        if (this.status && this.volume > 0)
            this.volume--;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    statusTv() {
        return (this.status) ? "Tivi On" : "Tivi Off";

    }

    toStringTv() {
        if (this.status)
            return alert("Tivi Status: " + this.statusTv() + ", Is Channel: " + this.getChannel() + ", Is Volume: " + this.getVolume());
        else return alert("Tivi Status: " + this.statusTv())
    }
}

