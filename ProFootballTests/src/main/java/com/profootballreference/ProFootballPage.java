package com.profootballreference;

public class ProFootballPage {
    static String url = "https://www.pro-football-reference.com/";
    static String title = "Pro Football Statistics and History | Pro-Football-Reference.com";

    public void goTo() {
        Browser.goTo(url);
    }

    public boolean isAt() {
        return Browser.title().equals(title);
    }
}
