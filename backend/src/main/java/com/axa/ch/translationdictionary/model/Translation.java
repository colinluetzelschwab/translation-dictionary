package com.axa.ch.translationdictionary.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "translation")
public class Translation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String textId;

    private String appId;

    private String context;

    private String stage;

    private String de;

    private String fr;

    private String it;

    private String en;

    private LocalDateTime lastCall;

    private boolean isTranslated;
}
