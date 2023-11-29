import { Inter } from 'next/font/google';
import Link from 'next/link';
import styled from '@emotion/styled';
import Page from '@/components/Page';
import { useEffect, useState } from 'react';
import {
  Stepper,
  Button,
  Group,
  Title,
  Box,
  TextInput,
  Text,
} from '@mantine/core';

import { useForm } from '@mantine/form';

const StepperContainer = styled.div`
  position: relative; // Ensures absolute positioning context for children
  height: 500px; // Adjust as needed
  padding-bottom: 60px; // Space for buttons, adjust as needed
`;

export default function EnterTask() {
  // const maxSteps = Object.keys(initialValues).length;

  const [activeStep, setActiveStep] = useState(0);
  const [isValidationPending, setIsValidationPending] = useState(false);

  const nextStep = () => {
    console.log('onNextStep getting called');
    setActiveStep((current) => (current < maxSteps ? current + 1 : current));
  };
  const prevStep = () =>
    setActiveStep((current) => (current > 0 ? current - 1 : current));

  const initialValues = {
    what: {
      name: '',
      notes: '',
    },
    where: {
      where: '',
    },
    when: {
      urgency: '',
      dueDate: '',
    },
  };

  const form = useForm({
    initialValues,
    validate: {
      what: {
        name: (value) => (value.length > 0 ? null : 'Give it a name!'),
      },
      where: {
        where: (value) => (value.length > 0 ? null : 'Specify the location!'),
      },
      // ... Add validation for other steps ...
    },
  });

  const steps = Object.keys(initialValues);

  // TODO - validate that name is not empty before you move on to the next step. Bug where currently doesn't validate before you hit next.

  // TODO - fill in all steps

  // Todo - Take entries and populate a database somehow.

  type StepValidationsType = {
    [key: number]: string[];
  };

  const stepValidations: StepValidationsType = {
    0: ['what.name', 'what.notes'],
    1: ['where.where'],
    // Add other validations for other steps as necessary...
  };

  const maxSteps = 5;
  const isFinalStep = activeStep === maxSteps - 1;

  // const onNextClick = () => {
  //   // if the step < maxSteps
  //   if (activeStep < maxSteps)
  //     // Run the validators for that step
  //     form.validateField("what.name");
  //   // if they pass go to next step
  //   if (Object.keys(form.errors).length > 0) {
  //     // do nothing
  //   } else {
  //     nextStep();
  //   }

  // };

  useEffect(() => {
    console.log(
      'useEffect triggered. isValidationPending:',
      isValidationPending,
      'form.errors:',
      form.errors
    );

    if (isValidationPending) {
      if (Object.keys(form.errors).length === 0) {
        nextStep();
      }
      setIsValidationPending(false);
    }
  }, [form.errors, isValidationPending]);

  const onNextClick = () => {
    // Validate fields for the current step
    if (stepValidations[activeStep]) {
      for (const field of stepValidations[activeStep]) {
        form.validateField(field);
      }
    }

    setIsValidationPending(true);
  };

  const buttonClick = () => {
    if (isFinalStep) {
      // todo - fix this because won't validate on final
      form.onSubmit((values) => console.log(values));
    } else {
      onNextClick();
    }
  };

  const color = activeStep === 5 ? 'green' : '';

  return (
    <Page>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title order={1} mb={'5rem'}>
          Add a task
        </Title>
        <Stepper
          active={activeStep}
          onStepClick={setActiveStep}
          breakpoint="sm"
        >
          <Stepper.Step label="What" description="do you need to do?">
            <Box maw={800} mx="auto" mb={'2rem'} mt={'2rem'}>
              <Text>Give your task a name and enter a short description.</Text>
              <Text>
                It may be some time before you get to this task so give a little
                context.
              </Text>
            </Box>

            <Box maw={600} mx="auto">
              <TextInput
                mb={'2rem'}
                withAsterisk
                label="Task Name"
                placeholder="Make lunch"
                {...form.getInputProps('what.name')}
              />
              <TextInput
                label="Short description"
                placeholder="Any notes about the task"
                {...form.getInputProps('description')}
              />
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Where" description="does it need to get done?">
            <Box maw={800} mx="auto" mb={'2rem'} mt={'2rem'}>
              <Text>
                Adding a location so you can easily sort all tasks based on
                where you currently are. Try School, Work, Garden, At the
                computer, Home etc.
              </Text>
            </Box>

            <Box maw={600} mx="auto">
              <TextInput
                mb={'2rem'}
                withAsterisk
                label="Where do you need to do it"
                placeholder="School, Work, or Home etc."
                {...form.getInputProps('where.where')}
              />
            </Box>
          </Stepper.Step>
          <Stepper.Step label="When" description="do you need to get it done">
            <Box maw={800} mx="auto" mb={'2rem'} mt={'2rem'}>
              <Text> Set an urgency level. Set a deadline</Text>
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Why" description="do you need to do it">
            <Box maw={800} mx="auto" mb={'2rem'} mt={'2rem'}>
              <Text>
                {
                  "+ How important is this task? + What are short, medium, and long-term consequences if you don't do it?"
                }
              </Text>
            </Box>
          </Stepper.Step>
          <Stepper.Step label="How" description="hard will it be to do">
            <Box maw={800} mx="auto" mb={'2rem'} mt={'2rem'}>
              <Text>
                {
                  "How long will it take you + Complexity + How much do you just not want to do it (sometimes we find an 'easy' task like writing a 10 second email quite hard)"
                }
              </Text>
            </Box>
          </Stepper.Step>

          <Stepper.Completed>
            <Box maw={800} mx="auto" mb={'2rem'} mt={'2rem'}>
              <Text>
                Great job! Click the back button to get to previous step Click
                done to go back to the list
              </Text>
            </Box>
          </Stepper.Completed>
        </Stepper>
      </form>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {/* TODO: change this to submit the form on step 5  */}
        <Button onClick={buttonClick} color={color}>
          {isFinalStep ? 'Done' : 'Next'}
        </Button>
      </Group>
    </Page>
  );
}
