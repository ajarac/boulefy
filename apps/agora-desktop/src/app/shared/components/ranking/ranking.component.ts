import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
    selector: 'agora-ranking',
    templateUrl: 'ranking.component.html',
    styleUrls: ['./ranking.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RankingComponent {
    @Input() ranking: number

    indexes: number[] = [1, 2, 3, 4, 5]

    getStart(index: number): string {
        return this.ranking >= index ? 'star' : 'star-outline'
    }
}
