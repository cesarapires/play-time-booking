import { Courts } from '@/domain/models/court-model'

export const mockCourtsList = (): Courts[] => {
  return [
    {
      publicId: '30c4204b-dd88-4814-becb-1ef3bef51f51',
      name: 'Court 1',
      urlImage: 'http://image.com/image1.jpg',
      price: 'R$ 100,00',
    },
    {
      publicId: '2e9fdb75-e8e6-430d-a057-aa59c6a2b046',
      name: 'Court 2',
      urlImage: 'http://image.com/image2.jpg',
      price: 'R$ 200,00',
    },
    {
      publicId: '29238bf1-947f-48ab-8fd2-c8017c44921a',
      name: 'Court 3',
      urlImage: 'http://image.com/image3.jpg',
      price: 'R$ 300,00',
    },
  ]
}
