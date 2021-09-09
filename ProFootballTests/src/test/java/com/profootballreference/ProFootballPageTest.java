package com.profootballreference;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ProFootballPageTest {

    @Test
    public void canGoToProFootballPage() {
        Pages.profootballPages().goTo();
        Assertions.assertTrue(Pages.profootballPages().isAt());
    }
}
