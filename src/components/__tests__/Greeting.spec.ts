import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Greeting from '../Greeting.vue'

describe('Greeting', () => {
  it('renders properly', () => {
    const wrapper = mount(Greeting, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
