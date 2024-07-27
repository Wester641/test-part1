'use client';
import React from 'react';
import { Input } from '../components/ui/input';
import { Button } from '@/components/ui/button';
import { SelectScrollable } from './SelectScrollable';
import { Textarea } from '@/components/ui/textarea';

export default function Dropdowndemo() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      phone: data.get('phone'),
      email: data.get('email'),
      jobType: data.get('jobType'),
      jobSourse: data.get('jobSourse'),
      message: data.get('message'),
      address: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zipCode'),
      test_select: data.get('test_select'),
      start_date: data.get('start_date'),
      start_time: data.get('start_time'),
      end_time: data.get('end_time'),
      test_select_1: data.get('test_select_1'),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '1100px', margin: '20px auto' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '20px',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <section
          className="flex gap-4 flex-col bg-white p-4 w-2/4 "
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '20px',
          }}
        >
          <h2>Client details</h2>
          <div className="flex gap-4">
            <Input type="text" name="firstName" placeholder="First Name" />
            <Input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <Input type="number" name="phone" placeholder="Phone" />
          <Input type="email" name="email" placeholder="Email" />
        </section>
        <section
          className="flex gap-4 flex-col bg-white p-4 w-2/4 "
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '20px',
          }}
        >
          <h2>Job details</h2>
          <div className="flex gap-4">
            <select name="jobType" id="">
              <option value="">Job Type</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="contract">Contract</option>
            </select>
            <select name="jobSourse" id="">
              <option value="">Job Source</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <Textarea name="message" placeholder="Type your message here." />
        </section>
        <section
          className="flex gap-4 flex-col bg-white p-4 w-2/4 "
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '20px',
          }}
        >
          <h2>Service location</h2>
          <Input type="text" name="address" placeholder="Address" />
          <Input type="text" name="city" placeholder="City" />
          <Input type="text" name="state" placeholder="State" />
          <div className="flex gap-4">
            <Input type="text" name="zipCode" placeholder="Zip Code" />
            <select name="test_select" id="">
              <option value="">Tampa</option>
              <option value="Tampa1">Tampa 1</option>
              <option value="Tampa2">Tampa 2</option>
              <option value="Tampa3">Tampa 3</option>
            </select>
          </div>
        </section>
        <section
          className="flex gap-4 flex-col bg-white p-4 w-2/4 "
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '20px',
          }}
        >
          <h2>Scheduled</h2>
          <Input type="date" name="start_date" placeholder="Start Date" />
          <div className="flex gap-4">
            <Input type="time" name="start_time" placeholder="Start Time" />
            <Input type="time" name="end_time" placeholder="End Time" />
          </div>
          <select name="test_select_1" id="">
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
        className="w-2/4 my-10 shadow-md"
      >
        Submit
      </Button>
    </form>
  );
}
