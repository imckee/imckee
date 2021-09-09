package com.profootballreference;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ProFootballLoginTest {

    @Test
    public void canGoToProFootballLogin() {
        Pages.profootballLogin().goTo();
        Assertions.assertTrue(Pages.profootballLogin().isAt());
    }

}