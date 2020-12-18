import { shallowMount } from '@vue/test-utils'
import PaymentForm from '@/components/PaymentForm'

describe('PaymentForm', () => {
  it('should render header', () => {
    const wrapper = shallowMount(PaymentForm)
    expect(wrapper.find('h1').text()).toEqual('Payment Form')
  })
})
