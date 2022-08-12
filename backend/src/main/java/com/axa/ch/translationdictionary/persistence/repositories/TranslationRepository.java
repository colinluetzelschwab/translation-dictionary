package com.axa.ch.translationdictionary.persistence.repositories;

import com.axa.ch.translationdictionary.model.Translation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface TranslationRepository extends JpaRepository<Translation, Long>, JpaSpecificationExecutor<Translation> {
    Optional<Translation> findByTextIdIgnoreCaseAndAppIdIgnoreCaseAndContextIgnoreCaseAndStageIgnoreCase(String textId, String
            appId, String context, String stage);
}
