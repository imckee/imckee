package com.profootballreference;

public class ProFootballLogin {
    static String url = "https://stathead.com/users/login.cgi?token=1&__hstc=223721476.346ccc7d1ba87792fb3d910166050b66.1629839185445.1631203141496.1631219013580.19&__hssc=223721476.1.1631219013580&__hsfp=1024124398&redirect_uri=https%3A//www.pro-football-reference.com/";
    static String title = "Login to Stathead From Sports Reference | Stathead.com";

    public void goTo() {
        Browser.goTo(url);
    }

    public boolean isAt() {
        return Browser.title().equals(title);
    }
}
