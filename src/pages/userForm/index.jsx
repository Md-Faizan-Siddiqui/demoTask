import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "../../component/textField";
import { testFormFields } from "../../lib/formFields";
import { Form, Formik } from "formik";
import { loginValidation } from "../../validations";
import Radio from "../../component/radio";
import Switch from "../../component/toggleSwitch";
import Select from "../../component/select";

const UserForm = () => {
  return (
    <Grid
      container
      sx={{
        background: "#fff",
        padding: "0px",
        mt: { md: "25px", sm: "25px", xs: "80px" },
        p: "30px",
      }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Noto Sans",
            fontSize: "23px",
            fontWeight: "400",
            mb: "30px",
          }}
        >
          User Form
        </Typography>
      </Grid>
      <Formik
        enableReinitialize={true}
        initialValues={{
          cName: "",
          email: "",
          phone: "",
          shift: "",
          role: "",
          roleVal: "",
        }}
        validationSchema={loginValidation}
        onSubmit={(values, { resetForm }) => {
            console.log(values)
          resetForm();
        }}
      >
        {({ setFieldValue, errors, touched, values }) => (
          <Form>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  width: "159px",
                  height: "73px",
                  borderRadius: "2px",
                  border: "1px dashed #CCC",
                  background: "#FDFDFD",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "10px",
                }}
              >
                <label
                  For="fileUpload"
                  style={{
                    width: "81px",
                    height: "31px",
                    borderRadius: "3px",
                    background: "#E4E4E4",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#333",
                    fontFamily: "Noto Sans",
                    fontSize: "11px",
                    fontWeight: "500",
                  }}
                >
                  + Browse
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  style={{ display: "none" }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#666",
                  fontFamily: "Noto Sans",
                  fontSize: "12px",
                  fontWeight: "400",
                  mb: "30px",
                }}
              >
                PNG, JPEG, JPG
              </Typography>
            </Grid>
            <Grid container spacing={4} item lg={12} md={12} sm={12} xs={12}>
              {testFormFields.map((field, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    lg={field.lg}
                    md={field.md}
                    sm={field.sm}
                    xs={field.xs}
                  >
                    {field.type === "select" ? (
                      <Select
                        label={field.label}
                        placeholder={field.placeholder}
                        type={field.type}
                        name={field.name}
                        pattern={field.pattern}
                        value={values[field.name]}
                        options={field.options}
                        onChange={(e) =>
                          setFieldValue(field.name, e.target.value)
                        }
                      />
                    ) : field.type === "checkbox" ? (
                      <Switch label={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      name={field.name}
                      pattern={field.pattern}
                      value={values[field.name]}
                      options={field.options}
                      onChange={(e) =>
                        setFieldValue(field.name, e.target.value)
                      }/>
                    ) : field.type === "radio" ? (
                      <Radio label={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      name={field.name}
                      pattern={field.pattern}
                      value={values[field.name]}
                      options={field.options}
                      onChange={(e) =>
                        setFieldValue(field.name, e.target.value)
                      } />
                    ) : (
                      <TextField
                        label={field.label}
                        placeholder={field.placeholder}
                        type={field.type}
                        name={field.name}
                        pattern={field.pattern}
                        value={values[field.name]}
                        onChange={
                          (e) => setFieldValue(field.name, e.target.value)
                          //   console.log(field.name, e.target.value)
                        }
                      />
                    )}

                    {errors[field.name] && touched[field.name] && (
                      <Typography
                        component="p"
                        sx={{
                          color: "red",
                          fontSize: ".8rem",
                          textAlign: "left",
                          mt: 1,
                          ml: 1,
                        }}
                      >
                        {errors[field.name]}
                      </Typography>
                    )}
                  </Grid>
                );
              })}
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  textAlign: "end",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    fontFamily: "Noto Sans",
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "140px",
                    p: "16px",
                  }}
                >
                  Add User
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default UserForm;
