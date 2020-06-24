import { Vue } from 'vue-property-decorator';
export default class RepoMixin extends Vue {
    slug: string;
    icon: string;
    showCount: boolean;
    count: number;
    get isLoading(): boolean;
}
