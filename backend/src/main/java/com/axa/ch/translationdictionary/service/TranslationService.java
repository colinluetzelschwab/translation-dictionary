package com.axa.ch.translationdictionary.service;

import com.axa.ch.translationdictionary.model.Translation;
import com.axa.ch.translationdictionary.persistence.repositories.TranslationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class TranslationService {

    private final TranslationRepository translationRepository;

    public Iterable<Translation> getTranslations() {
        return translationRepository.findAll();
    }

    public void deleteTranslation(int textId) {
        translationRepository.delete(Objects.requireNonNull(findById(textId)));
    }

    public Translation updateTranslation(int id, Translation translation) {
        translation.setLastCall(LocalDateTime.now());
        translation.setId(id);
        return translationRepository.save(translation);
    }

    public void createTranslation(Translation translation) {

        translation.setLastCall(LocalDateTime.now());
        translationRepository.save(translation);
    }

    private Translation findById(int id) {
        Optional<Translation> entry = translationRepository.findById(id);
        if(entry.isEmpty()) return null; //TODO error handeling
        return entry.get();
    }

}
