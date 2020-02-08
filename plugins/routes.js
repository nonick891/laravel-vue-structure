import Stickers from '../components/pages/stickers.vue'
import Campaign from '../components/pages/campaign.vue'
import Campaigns from '../components/pages/campaigns.vue'

const routes = [
	{ path: '/stickers', component: Stickers, name: 'index' },
	{ path: '/campaign/:type/new', component: Campaign, name: 'new-campaign' },
	{ path: '/campaign/:id', component: Campaign, name: 'campaign' },
	{ path: '/campaigns/', component: Campaigns, name: 'campaigns' }
];

export default routes
