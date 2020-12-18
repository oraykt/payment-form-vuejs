import { shallowMount } from '@vue/test-utils'
import PaymentInformation from '@/components/PaymentInformation'

describe('PaymentInformation', () => {
  it('should render header', () => {
    const wrapper = shallowMount(PaymentInformation)
    expect(wrapper.find('h2').text()).toEqual('Payment Information')
  })
})
