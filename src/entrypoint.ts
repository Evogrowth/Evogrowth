import type { Alpine } from 'alpinejs'
import mask from '@alpinejs/mask'

export default (Alpine: Alpine) => {
    Alpine.plugin(mask)
}