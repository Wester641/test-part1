'use client';
import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { requester } from '@/api/requester';
import { title } from 'process';

export default function JobCreateComponent() {
  const [formField, setFormField] = useState({
    name: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    jobType: '',
    jobSourse: '',
    message: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    test_select: '',
    start_date: '',
    start_time: '',
    end_time: '',
    test_select_1: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormField({
      ...formField,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = requester.post('/persons', formField);
      console.log('response', response);
      return response;
    } catch (error) {
      console.error('Error creating person:', error);
      throw error;
    }
  };

  return (
    <>
      <form
        className="flex flex-row gap-4"
        onSubmit={onSubmit}
        style={{ width: '1100px', margin: '20px auto' }}
      >
        <div className="flex gap-4">
          <section className="flex gap-4 flex-col bg-white p-10 w-2/4 shadow-md  ">
            <h2>Client details</h2>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <Input
              type="number"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </section>
          <section className="flex gap-4 flex-col bg-white p-4 w-2/4 shadow-md ">
            <h2>Job details</h2>
            <div className="flex gap-4">
              <select name="jobType" onChange={handleChange}>
                <option value="">Job Type</option>
                <option value="fulltime">Full Time</option>
                <option value="parttime">Part Time</option>
                <option value="contract">Contract</option>
              </select>
              <select name="jobSourse" onChange={handleChange}>
                <option value="">Job Source</option>
                <option value="fulltime">Full Time</option>
                <option value="parttime">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <Textarea
              name="message"
              placeholder="Type your message here."
              onChange={handleChange}
            />
          </section>
        </div>
        <div className="flex gap-4">
          <section className="flex gap-4 flex-col bg-white p-4 w-2/4 shadow-md ">
            <h2>Service location</h2>
            <Input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <Input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                onChange={handleChange}
              />
              <select name="test_select" onChange={handleChange}>
                <option value="">Tampa</option>
                <option value="Tampa1">Tampa 1</option>
                <option value="Tampa2">Tampa 2</option>
                <option value="Tampa3">Tampa 3</option>
              </select>
            </div>
          </section>
          <section className="flex gap-4 flex-col bg-white p-4 w-2/4 shadow-md ">
            <h2>Scheduled</h2>
            <Input
              type="date"
              name="start_date"
              placeholder="Start Date"
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <Input
                type="time"
                name="start_time"
                placeholder="Start Time"
                onChange={handleChange}
              />
              <Input
                type="time"
                name="end_time"
                placeholder="End Time"
                onChange={handleChange}
              />
            </div>
            <select name="test_select_1" onChange={handleChange}>
              <option value="">Test Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </section>
        </div>
        <Button
          variant="default"
          size="sm"
          type="submit"
          className="w-2/4 shadow-md mt-4"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
