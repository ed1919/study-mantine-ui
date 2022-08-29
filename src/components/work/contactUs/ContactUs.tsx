import { FC, useState, useEffect } from "react";
import { Group } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  Container,
  Title,
  TextInput,
  Grid,
  Stack,
  Button,
} from "@mantine/core";
/*
Left Modal CSS

borderRadius: 24px
padding: 36px;

*/
const useStyles = createStyles((theme, _params, getRef) => ({
  container: {
    border: "1px solid red",
  },

  titlesWrapper: {
    marginBottom: 64,
  },

  title1: {
    margin: "4px 0px 8px",
  },

  title2: {
    margin: "0px 0px 16px",
  },

  title3: {
    margin: "8px 0px",
  },

  formCard: {
    height: "100%",
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },

  form: {
    height: "100%",
    justifyContent: "space-between",
  },

  imgWrapper: {
    border: "1px solid red",
    borderRadius: 24,
    overflow: "hidden",
    height: "100%",
  },
}));

interface IContactUsForm {
  name: string;
  email: string;
  phone: string;
  brand: string;
}

interface IContactUsProps {}

const ContactUs: FC<IContactUsProps> = ({}) => {
  const { classes } = useStyles();

  const contactUsForm = useForm<IContactUsForm>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      brand: "",
    },
    validate: {
      name: (value) => (value.length > 0 ? null : "Invalid name"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) => (value.length > 0 ? null : "Invalid phone"),
    },
  });

  const handleSubmitForm = (values: object) => {
    console.log("values", values);
  };

  return (
    <Container className={classes.container} size={1200} px={0}>
      <Grid gutter={24}>
        <Grid.Col span={8}>
          <Stack className={classes.formCard}>
            <div>
              <Title className={classes.title1} order={4}>
                Get in touch
              </Title>
              <Title className={classes.title2} order={1}>
                You have my Attention
              </Title>
              <Title className={classes.title3} order={3}>
                Show me your enthusiasm, passionate, power, desire to earn money
              </Title>
            </div>
            <form onSubmit={contactUsForm.onSubmit(handleSubmitForm)}>
              <Stack spacing={8}>
                <TextInput
                  withAsterisk
                  label="Name"
                  placeholder="Your Name"
                  {...contactUsForm.getInputProps("name")}
                />

                <Group>
                  <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...contactUsForm.getInputProps("email")}
                  />

                  <TextInput
                    withAsterisk
                    label="Phone"
                    placeholder="your@email.com"
                    {...contactUsForm.getInputProps("phone")}
                  />
                </Group>

                <TextInput
                  label="Brand (optional)"
                  placeholder="Brand Name"
                  {...contactUsForm.getInputProps("brand")}
                />

                <Group position="center" mt="md">
                  <Button type="submit">Submit</Button>
                </Group>
              </Stack>
            </form>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className={classes.imgWrapper}>
            <img
              src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/6115206fd07df43c9a879531_pexels-photo-5076516.jpeg"
              // src="/images/contact-us-right.png"
              width="100%"
              height="100%"
              alt="contact-us"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ContactUs;
