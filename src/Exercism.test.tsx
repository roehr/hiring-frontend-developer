import React from 'react';
import { render } from '@testing-library/react';
import Exercism from './Exercism';
import * as services from "./service/fetchData"
test('renders', () => {
  const trackSpy= jest.spyOn(services, "getAllTracks");
  const testimonialsSpy= jest.spyOn(services, "getTestimonials");
  trackSpy.mockResolvedValue([])
  testimonialsSpy.mockResolvedValue({testimonials: {pagination:{current_page:1, total_count:20, total_pages:1},
      results: [], track_counts: new Map(), tracks: []}})
  const underTest=render(<Exercism/>);
  underTest.debug()
});
