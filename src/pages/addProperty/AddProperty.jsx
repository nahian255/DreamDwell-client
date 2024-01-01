
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

const AddProperty = () => {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    return (
        <div className="p-28 ">
            <h1> Add Property page</h1>
            <Button variant="filled" color="cyan" size="md" radius="md">Button</Button>
            <>
                <Stepper active={active} onStepClick={setActive}>
                    <Stepper.Step label="First step" description="Create an account">
                        Step 1 content: Create an account
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                        Step 2 content: Verify email
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                        Step 3 content: Get full access
                    </Stepper.Step>
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>

                <Group justify="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button className=' text-black border-2 border-gray-300' onClick={nextStep}>Next step</Button>
                </Group>
            </>
        </div>
    );
};

export default AddProperty;