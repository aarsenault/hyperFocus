
import { Inter } from "next/font/google";
import Link from "next/link";
import styled from "@emotion/styled";
import Page from "@/components/Page";
import { useState } from 'react';
import { Stepper, Button, Group, Title, Box, TextInput, Text } from '@mantine/core';

import { useForm } from '@mantine/form';

const inter = Inter({ subsets: ["latin"] });

{/* https://mantine.dev/form/use-form/ */}

export default function EnterTask() {


const maxSteps = 5; 
  
const [active, setActive] = useState(0);
const nextStep = () => {
  
  console.log('onNextStep getting called'); 
  setActive((current) => (current < maxSteps ? current + 1 : current));

}
const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));



const initialValues = {
      what: {
        name: '',
        notes: '',      
      }, 
      where: {
        where: ''
      }, 
      when: {
        urgency: '',
        dueDate: ''
      }
}; 
  
const form = useForm({initialValues, 
      validate: {
        what: {
          name: (value) => (value.length >  0 ? null : 'Give it a name!'),
        },
    },
  })



const steps = Object.keys(initialValues);
  
  // TODO - validate that name is not empty 



const onNextClick = () => {

  // if the step < maxSteps 
  if (active < maxSteps)
    // Run the validators for that step 
      form.validateField('what.name');
      // if they pass go to next step
      if (Object.keys(form.errors).length > 0) {
        // do nothing
      } else {
        nextStep()
      }

  // if the step == maxSteps
    // Run validators
      // if they pass Submmit the form 
  
}

  
const color = active === 5 ? 'green' : ""; 
  
  return (

    <Page>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>

      <Title order={1} mb={"5rem"}> Add a task</Title>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="What" description="do you need to do?">
          <Box maw={800} mx="auto" mb={"2rem"} mt={'2rem'} >
            <Text> + Task name </Text>
            <Text> + Short notes </Text>
          </Box>
            
          <Box maw={600} mx="auto" >
            <TextInput mb={'2rem'}
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
          
          + School 
          + Work 
          + Outside
          + Home

          Try and make some groups so you can easily sort all tasks based on where you currently are. 


          <Box maw={600} mx="auto" >
            <TextInput mb={'2rem'}
              withAsterisk
              label="Where do you need to do it"
              placeholder="School"
              {...form.getInputProps('where')}
            />
          </Box>
        </Stepper.Step>
        <Stepper.Step label="When" description="do you need to get it done">
          + Set an urgency level
          + Set a deadline 
        </Stepper.Step>
        <Stepper.Step label="Why" description="do you need to do it">
          + How important is this task? 
          + What are short, medium, and long-term consequences if you don't do it? 
        </Stepper.Step>
        <Stepper.Step label="How" description="hard will it be to do">
          + How long will it take you 
          + Complexity
          + How much do you just not want to do it (sometimes we find an 'easy' task like writing a 10 second email quite hard)
        </Stepper.Step>

        <Stepper.Completed>
          Great job! 
          Click the back button to get to previous step
          Click done to go back to the list
        </Stepper.Completed>
      </Stepper>

      </form>
      
      <Group position="center" mt="xl" mt={'10rem'}>
        <Button variant='default' onClick={prevStep}>Back</Button>
        {/* TODO: change this to submit the form on step 5  */}
        <Button onClick={onNextClick}  color={color}>{active === maxSteps ? 'Done' : "Next"} </Button>
      </Group>

    </Page>
  )
}


