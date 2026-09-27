'use client';

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from 'nooxit-design-system/components/questionnaire';

export default function QuestionnaireDemo() {
  return (
    <Questionnaire
      className="w-full max-w-md"
      items={[{ name: 'role' }, { name: 'size' }]}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="role" required>
        <QuestionnaireTitle>What do you do?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="design">
            Design
            <QuestionnaireChoiceDescription>
              You work in Figma most days.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="engineering">
            Engineering
            <QuestionnaireChoiceDescription>
              You ship the components.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireItem name="size" required>
        <QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="solo">Just me</QuestionnaireChoice>
          <QuestionnaireChoice value="small">2–10 people</QuestionnaireChoice>
          <QuestionnaireChoice value="large">More than 10</QuestionnaireChoice>
        </QuestionnaireChoices>
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext />
      </QuestionnaireActions>
    </Questionnaire>
  );
}
