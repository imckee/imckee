package com.profootballreference;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ProFootballScoreTest {

    @Test
    public void canGoToProFootballScore() {
        Pages.profootballScore().goTo();
        Assertions.assertTrue(Pages.profootballScore().isAt());

    }

}
