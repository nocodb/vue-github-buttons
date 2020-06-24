import { Vue } from 'vue-property-decorator';
export default class GitHubButton extends Vue {
    icon: string;
    link: string;
    isLoading: boolean;
    count: number;
    countLink: string;
    get iconComponentName(): string;
    get hasCount(): boolean;
    get hasCountLink(): boolean;
    get fullLink(): string;
    get fullCountLink(): string;
}
