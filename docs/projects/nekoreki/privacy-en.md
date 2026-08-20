# NekoReki (猫猫日历) Privacy Policy

> Version: 1.1.0
> Effective Date: 2026-08-20
> Applies to: NekoReki v1.1.0 (iOS / Android)
>
> This is the English version of this policy. The Chinese version is available at [隐私政策（中文）](/projects/nekoreki/privacy).

---

## Introduction

NekoReki is a local-first, offline-capable perpetual calendar and schedule assistant. We follow a "your data belongs to you" principle: your schedules, memorials, reminders, and preferences are stored only on your own device. This app does not rely on any server, nor does it require you to register or log in.

This app is open-source software, dual-licensed under MIT and Apache-2.0, with its source code publicly available on GitHub. This means every statement in this policy can be verified against the source code.

## 1. Information We Collect

**We do not collect any personal information.** Specifically:

- No account, phone number, email, or other identity information is collected (this app has no account system and no login feature).
- No device identifiers (e.g., IDFA, Android ID, IMEI, MAC address) are collected.
- No location information is collected, and no location permission is requested.
- No access to contacts, photo library, camera, or microphone.
- The system calendar is not accessed (your schedules are stored only inside the app and never synced with the system calendar).
- No usage-behavior data is collected (no analytics, tracking, or crash reporting).

Schedules, memorials, reminders, and preferences (theme, lunar calendar display options, etc.) that you create are **your data**, fully controlled by you, and processed only locally.

## 2. Use of Information

Your data is used only locally to:

- Display the calendar, lunar calendar, solar terms, auspicious days, and related information (all computed locally on your device, no network required).
- Send **local notifications** at the reminder times you set (notification content never leaves your device and is never uploaded to any server).

## 3. Storage and Security of Information

- All data (schedules, memorials, reminders, preferences) is stored in the app sandbox on your device (local MMKV storage), protected by the operating system's sandbox and permission mechanisms; other apps cannot access it.
- This app has **no servers**; your data never leaves your device.
- On Android, system cloud backup is disabled (`allowBackup=false`); app data does not participate in automatic system backups.
- On iOS: the app itself never uploads data to any cloud; your device may include app data in OS-level backups (iCloud or computer backups), which is an operating-system behavior unrelated to this app.
- Data is not stored encrypted; please do not record sensitive information (such as passwords, ID numbers, or banking information) in the app.

## 4. Data Retention and Deletion

- Your data is retained on your device until you actively delete it or uninstall the app.
- We do not retain, archive, or back up your data on our side; since data exists only locally, uninstalling the app permanently deletes all data stored by it.
- The power to delete is entirely in your hands - we cannot access, export, or delete it on your behalf.

## 5. Sharing and Transfer of Information

- **No sharing**: we do not provide your data to any third party.
- **No transfer**: the current version's business features make no network requests and upload or download no data to or from any server.
- **No third-party data SDKs**: this app integrates no third-party SDKs for advertising, analytics, crash reporting, or push notification services.

## 6. Permissions

| Permission | Purpose | Notes |
|---|---|---|
| Notifications (Android 13+ / iOS) | Sending schedule and memorial reminders | Requested via the system prompt only when you want reminders; can be turned off anytime in system settings |
| INTERNET (Android) | Declared by default by the React Native framework | The release build's business features do not use the network and transfer no data |

## 7. Open Source and Third-Party Components

This app is open-source software (MIT or Apache-2.0); its source code is publicly available for review and audit on GitHub: <https://github.com/BoxCatTeam/nekoreki>.

This app is built on open-source components (React Native, react-native-paper, etc.). These components run only locally on your device and do not collect or transfer your data. License information for each component is available on the "About" screen inside the app.

## 8. Children's Privacy

This app collects no personal information, so there are no issues regarding the processing of children's personal information. Should this policy change in the future, we will provide separate notice.

## 9. Your Rights and Control

- **View & delete**: you can view, edit, or delete the schedules, memorials, and reminders you created at any time.
- **Clear data**: clearing this app's storage data (or using "Clear data" in system settings) deletes all local data.
- **Deleted upon uninstall**: uninstalling the app deletes all data stored by it.
- **Disable notifications**: you can disable this app's notification permission anytime in system settings.

## 10. Changes to This Policy

If this policy changes, we will publish the update on the "About" screen in the app or on the page hosting this document, with a new effective date. Material changes (such as introducing servers or beginning to collect data) will be announced prominently in advance.

## 11. Contact Us

If you have any questions or suggestions about this policy, please contact us via:

- Email: <support@boxcat.org>
- Project homepage: <https://github.com/BoxCatTeam/nekoreki> (GitHub Issues)
- Developer: BoxCat Team
