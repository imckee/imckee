package com.profootballreference;

public class ProFootballScore {
    static String url = "https://www.pro-football-reference.com/boxscores/";
    static String title = "NFL Scores | Pro-Football-Reference.com";

    public void goTo() {
        Browser.goTo(url);
    }

    public boolean isAt() {
        return Browser.title().equals(title);
    }

}
