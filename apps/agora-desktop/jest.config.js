module.exports = {
    name: 'agora-desktop',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/agora-desktop',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
}
