import {shallowMount} from '@vue/test-utils'
import ContactInformation from '@/components/ContactInformation'

describe('ContactInformation', () => {
  it('should render header', () => {
    const wrapper = shallowMount(ContactInformation)
    expect(wrapper.find('h2').text()).toEqual('Contact Information')
  })
})
