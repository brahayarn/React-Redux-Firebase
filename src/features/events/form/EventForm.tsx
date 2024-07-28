import { Header, Segment, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/store/store";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";
import { createId } from "@paralleldrive/cuid2";
import { useAppDispatch } from "../../../app/store/store";
import { useNavigate } from "react-router-dom";
import { createEvent, updateEvent } from "../eventSlice";

export default function EventForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((e) => e.id === id)
  );

  function handleFormSubmit(data: FieldValues) {
     id = id ?? createId();
     event
     ? dispatch(updateEvent({...event, ...data, date: data.date.toString()}))
      : dispatch(createEvent({...data, id, hostedBy: 'Bob', hostPhotoURL: '', attendees: [], date: data.date.toString()}));
         navigate(`/events/${id}`);
  }
  return (
    <Segment clearing>
      <Header content="Event Details" sub color="teal" />
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Form.Input
          placeholder="Event Title"
          defaultValue={event?.title || ""}
          {...register("title", { required: true })}
          error={errors.title && "Event title is required"}
        />
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          defaultValue={event?.category || ""}
          render={({ field }) => (
            <Form.Select
              options={categoryOptions}
              placeholder="Category"
              clearable
              {...field}
              onChange={(_, d) => setValue("category", d.value, { shouldValidate: true })}
              error={errors.category && errors.category.message}
            />
          )}
        />
        <Form.TextArea
          placeholder="Description"
          defaultValue={event?.description || ""}
          {...register("description", { required: "Description is required" })}
          error={errors.description && errors.description.message}
        />
        <Header content="Location Details" sub color="teal" />
        <Form.Input
          placeholder="City"
          defaultValue={event?.city || ""}
          {...register("city", { required: "City is required" })}
          error={errors.city && errors.city.message}
        />
        <Form.Input
          placeholder="Venue"
          defaultValue={event?.venue || ""}
          {...register("venue", { required: "Venue is required" })}
          error={errors.venue && errors.venue.message}
        />
        <Form.Field>
            <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
            defaultValue={event && new Date(event.date) || null} 
            render={({ field }) => (
                <DatePicker
                selected={field.value}
                onChange={value => setValue('date',value , { shouldValidate: true })}
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Event Date and Time"
                />

            )}
            />
        </Form.Field>
        <Button
          loading={isSubmitting}
          disabled={!isValid}
          type="submit"
          floated="right"
          positive
          content="Submit"
        />
        <Button
          disabled={isSubmitting}
          as={Link}
          to="/events"
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
