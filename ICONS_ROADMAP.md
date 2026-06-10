# 1000 Missing Icons — Roadmap for `msr-icons`

A curated list of **1000 icons** the average developer / coding agent commonly
needs but that were not yet present in `msr-icons` (validated against the 887
icons already exported by the package, so every name below is new).

Each icon is implemented as a React component in `src/icons/dev_*.jsx`, following
the library's standard `BaseIcon` stroke pattern (24×24 viewBox, `fillColor` /
`isColored` props, `currentColor` fallback).

**Total: 1000 icons across 35 categories.**

## Commerce / E-commerce (34)

`Cart`, `CartPlus`, `CartMinus`, `CartCheck`, `CartX`, `Wishlist`, `Coupon`, `PriceTag`, `ReceiptLong`, `WalletAdd`, `CreditCardAlt`, `Cash`, `Banknote`, `Refund`, `Shipping`, `Package2`, `PackageOpen`, `PackageCheck`, `Delivery`, `Storefront`, `Store`, `ShopBag`, `GiftCard`, `Barcode2`, `Pos`, `Cashier`, `MoneyBag`, `Subscription`, `Membership`, `Loyalty`, `Voucher`, `Sale`, `Bid`, `Auction`

## Status / Feedback (38)

`CircleCheck`, `CircleX`, `CircleInfo`, `CircleExclamation`, `CircleQuestion`, `CircleMinus`, `CirclePlus`, `CircleDot`, `CircleSlash`, `CircleHalf`, `TriangleAlert`, `TriangleExclamation`, `SquareCheck`, `SquareX`, `SquarePlus`, `SquareMinus`, `SquareDot`, `OctagonAlert`, `ShieldCheck`, `ShieldX`, `ShieldAlert`, `ShieldQuestion`, `BadgeCheck`, `BadgeX`, `BadgeAlert`, `BadgeInfo`, `StatusOnline`, `StatusOffline`, `StatusAway`, `StatusBusy`, `Unverified`, `Pending`, `Approved`, `Rejected`, `Flagged`, `Spinner`, `LoadingDots`, `ProgressRing`

## Navigation / Arrows (34)

`ArrowUpRight`, `ArrowUpLeft`, `ArrowDownRight`, `ArrowDownLeft`, `ArrowsUpDown`, `ArrowsLeftRight`, `ArrowUpCircle`, `ArrowDownCircle`, `ArrowLeftCircle`, `ArrowRightCircle`, `ChevronUpDown`, `ChevronsUp`, `ChevronsDown`, `ChevronsLeft`, `ChevronsRight`, `CaretUp`, `CaretDown`, `CaretLeft`, `CaretRight`, `Move`, `MoveHorizontal`, `MoveVertical`, `MoveDiagonal`, `ExpandArrows`, `CollapseArrows`, `Maximize2`, `Minimize2`, `ArrowUturnLeft`, `ArrowUturnRight`, `ArrowUturnUp`, `ArrowUturnDown`, `SwapHorizontal`, `SwapVertical`, `Shuffle2`

## Version Control / Git (24)

`GitBranch`, `GitCommit`, `GitMerge`, `GitPullRequest`, `GitPullRequestClosed`, `GitPullRequestDraft`, `GitCompare`, `GitFork`, `GitGraph`, `GitTag`, `GitStash`, `CodeBranch`, `Repository`, `RepoForked`, `CommitHorizontal`, `DiffAdded`, `DiffRemoved`, `DiffModified`, `DiffRenamed`, `MergeConflict`, `Rebase`, `CherryPick`, `Blame`, `Changelog`

## Code / Development (43)

`CodeBracket`, `CodeBrackets`, `CodeCurly`, `CodeTags`, `CodeSquare`, `Terminal2`, `TerminalSquare`, `Console2`, `CommandLine`, `Cursor`, `CursorText`, `Indent`, `Outdent`, `Bug2`, `BugSlash`, `Breakpoint`, `Debugger`, `Variable`, `FunctionIcon`, `Method`, `ClassIcon`, `Module2`, `Package3`, `Dependency`, `Compile`, `Execute`, `RegexIcon`, `Snippet`, `Refactor`, `Lint`, `Minify`, `Webhook`, `Endpoint`, `RestApi`, `GraphqlIcon`, `JsonIcon`, `XmlIcon`, `YamlIcon`, `EnvFile`, `ConfigFile`, `Binary`, `Hexadecimal`, `PullDown`

## DevOps / Cloud / Infra (38)

`Server2`, `ServerStack`, `ServerRack`, `Database2`, `DatabaseBackup`, `DatabaseSync`, `DatabaseLock`, `DatabaseX`, `CloudUpload2`, `CloudDownload2`, `CloudSync`, `CloudCheck`, `CloudX`, `CloudCog`, `Container2`, `Docker2`, `Pipeline`, `Deploy`, `Rocket2`, `LoadBalancer`, `Cdn`, `Cache`, `Queue`, `Cluster`, `Node2`, `Microservice`, `Serverless`, `VirtualMachine`, `Vpn`, `Proxy`, `Gateway`, `Dns`, `Ssl`, `Uptime`, `Monitoring`, `Logs2`, `Metrics`, `Observability`

## Files / Documents (37)

`FileCode`, `FileJson`, `FileText2`, `FilePdf`, `FileImage2`, `FileVideo2`, `FileAudio2`, `FileZip2`, `FileCsv`, `FileExcel`, `FileWord`, `FilePowerpoint`, `FileMarkdown`, `FileLock2`, `FileKey`, `FilePlus2`, `FileMinus2`, `FileCheck2`, `FileX2`, `FileEdit2`, `FileSymlink`, `FolderCode`, `FolderGit`, `FolderPlus2`, `FolderMinus2`, `FolderLock2`, `FolderSync`, `FolderArchive`, `FolderHeart`, `Documents`, `Clipboard2`, `ClipboardCheck`, `ClipboardCopy`, `ClipboardList`, `ClipboardX`, `Paperclip2`, `Attachment2`

## Communication / Social (31)

`MessageCircle2`, `MessageSquare2`, `MessageText`, `MessageDots`, `MessagePlus`, `Chat2`, `ChatBubble`, `Inbox2`, `Outbox`, `SendMessage`, `Reply2`, `Forward2`, `MailOpen2`, `MailCheck`, `MailX`, `MailPlus`, `MailSearch`, `AtSign2`, `Megaphone2`, `Announcement`, `Notification2`, `NotificationOff`, `BellRing2`, `BellPlus`, `Comment2`, `CommentDots`, `ThreadIcon`, `Reaction`, `ThumbsUpAlt`, `ThumbsDownAlt`, `PhoneCall2`

## Users / People / Account (31)

`UserCheck`, `UserX2`, `UserPlus2`, `UserMinus2`, `UserCog`, `UserLock`, `UserSearch`, `UserStar`, `UserHeart`, `UserCircle2`, `UserSquare`, `UserGroup2`, `TeamIcon`, `ProfileCard`, `Avatar2`, `Contact2`, `ContactBook`, `Identity`, `Persona`, `Account2`, `Organization`, `Department`, `Role`, `Permission2`, `UserBlock`, `UserShield`, `UserVoice`, `UserClock`, `UserEdit`, `Followers`, `Following`

## Media / Player (29)

`PlayCircle2`, `PauseCircle2`, `StopCircle2`, `SkipForward2`, `SkipBackward`, `FastForward2`, `Rewind2`, `Repeat2`, `RepeatOne`, `ShuffleAlt`, `VolumeHigh2`, `VolumeLow2`, `VolumeMute2`, `VolumeX2`, `Playlist2`, `Album2`, `Track`, `Headphones2`, `MicrophoneOff`, `Podcast2`, `Radio2`, `Cassette`, `Soundwave`, `WaveformIcon`, `ClosedCaption`, `Fullscreen`, `ExitFullscreen`, `Live`, `RecordIcon`

## Layout / UI (38)

`LayoutGrid`, `LayoutList`, `LayoutColumns`, `LayoutRows`, `LayoutSidebar`, `LayoutSidebarRight`, `LayoutHeader`, `LayoutFooter`, `LayoutDashboard2`, `LayoutKanban`, `LayoutMasonry`, `Sidebar2`, `PanelLeft`, `PanelRight`, `PanelTop`, `PanelBottom`, `SplitHorizontal`, `SplitVertical`, `Columns2`, `Rows2`, `GridDots`, `GridPlus`, `Table2`, `TableColumns`, `TableRows`, `TableCells`, `Card2`, `Cards`, `Carousel`, `Tabs2`, `Popover`, `Tooltip2`, `Slider2`, `ToggleOn`, `ToggleOff`, `Checkbox2`, `RadioButton`, `Dropdown2`

## Text / Editor formatting (27)

`Heading1`, `Heading2`, `Heading3`, `ParagraphIcon`, `TextSize`, `TextBold`, `TextItalic`, `Highlighter2`, `ListOrdered`, `ListUnordered`, `ListCheck`, `ListTodo`, `Quote2`, `Blockquote`, `LineSpacing`, `LetterSpacing`, `Code2`, `InlineCode`, `TextWrap`, `TextAlignJustify`, `TextNoWrap`, `SpellCheck`, `WordCount`, `TextCursor2`, `TypeIcon`, `FontSize`, `FontFamily`

## Data / Analytics / Charts (30)

`ChartBar2`, `ChartLine2`, `ChartPie2`, `ChartArea2`, `ChartScatter`, `ChartBubble`, `ChartCandlestick`, `ChartRadar`, `ChartDonut`, `ChartGantt`, `Histogram`, `Analytics`, `Dashboard3`, `Kpi`, `Funnel2`, `DataTable`, `PivotTable`, `Spreadsheet2`, `Report2`, `Insight`, `Trend2`, `Forecast`, `Segment`, `Dimension`, `Measure`, `Aggregate`, `Filter3`, `SortAsc`, `SortDesc`, `GroupBy`

## Security / Privacy (26)

`LockOpen2`, `LockClosed`, `Unlock2`, `KeyRound2`, `KeyholeIcon`, `ShieldLock`, `ShieldKey`, `ShieldUser`, `Fingerprint2`, `FaceId`, `Scan2`, `ScanFace`, `Encryption`, `Decryption`, `Password2`, `Otp`, `SecurityCamera`, `Incognito`, `PrivacyMask`, `Token2`, `Certificate2`, `Signature2`, `Authentication`, `Authorization`, `Captcha`, `Honeypot`

## Tools / Settings / Misc (32)

`Settings2`, `Settings3`, `Sliders2`, `Wrench2`, `Hammer2`, `Screwdriver2`, `Toolbox`, `Gear2`, `GearPair`, `Cog2`, `Tune`, `Adjust`, `Calibrate`, `Maintenance`, `Build2`, `Construct`, `Power2`, `PowerOff`, `Restart2`, `Reboot`, `Reset2`, `Sync2`, `Refresh3`, `Update2`, `Upgrade`, `Install2`, `Uninstall`, `Plugin2`, `Extension2`, `Addon`, `Integration`, `Automation`

## Time / Calendar / Scheduling (24)

`CalendarDays`, `CalendarCheck2`, `CalendarX2`, `CalendarPlus2`, `CalendarMinus2`, `CalendarClock`, `CalendarHeart`, `CalendarRange`, `CalendarEvent`, `Clock2`, `ClockAlert`, `Stopwatch2`, `Timer2`, `Hourglass2`, `Alarm2`, `AlarmPlus`, `Schedule`, `Deadline`, `Reminder`, `Duration`, `Countdown`, `History2`, `TimeMachine`, `Snooze`

## Maps / Location / Travel (24)

`MapPin`, `MapPin2`, `MapPinned`, `MapTrifold`, `Navigation3`, `NavigationOff`, `Route2`, `Pin2`, `Flag2`, `FlagCheckered`, `Milestone`, `Crosshair2`, `Target2`, `GeoFence`, `Coordinates`, `Altitude`, `Distance2`, `Layers2`, `Satellite2`, `StreetView`, `Airport`, `TrainStation`, `BusStop`, `Harbor`

## Devices / Hardware (39)

`Cpu2`, `Gpu`, `Memory2`, `Motherboard`, `Chip2`, `Microchip`, `CircuitBoard`, `HardDrive2`, `SsdDrive`, `UsbDrive`, `SdCard`, `Router2`, `Modem`, `NetworkSwitch`, `Antenna2`, `SatelliteDish2`, `Webcam2`, `Scanner2`, `Printer3`, `Projector2`, `Monitor3`, `DualMonitor`, `LaptopCode`, `Keyboard3`, `Mouse3`, `Trackpad`, `Gamepad3`, `Joystick2`, `VrHeadset`, `Smartwatch2`, `Earbuds`, `Speaker3`, `Battery2`, `BatteryCharging2`, `BatteryLow2`, `BatteryFull2`, `PlugIcon`, `SocketIcon`, `PowerCable`

## Nature / Science / Misc (20)

`Atom2`, `Molecule`, `Dna2`, `Telescope2`, `Magnet2`, `Flask2`, `TestTube2`, `Beaker2`, `Radiation`, `Biohazard`, `Recycle2`, `EcoLeaf`, `WaterDrop2`, `FlameAlt`, `Snowflake2`, `Thermometer3`, `TreeAlt`, `Cactus2`, `Mushroom2`, `Feather2`

## Transportation (23)

`CarAlt`, `CarSide`, `Taxi2`, `Bus2`, `TruckAlt`, `Van2`, `Motorcycle2`, `Scooter2`, `BicycleAlt`, `Train2`, `Tram2`, `Airplane2`, `Helicopter2`, `Rocket3`, `Ship2`, `Sailboat2`, `Anchor2`, `Fuel2`, `ChargingStation`, `TrafficLight2`, `RoadIcon`, `Bridge2`, `ParkingMeter`

## Food / Drink (28)

`CoffeeAlt`, `TeaCup`, `Beer2`, `Wine2`, `Cocktail2`, `Soda`, `Pizza2`, `Burger2`, `Sandwich2`, `Taco2`, `Sushi2`, `Noodles`, `Salad2`, `IceCream3`, `Cake2`, `Donut2`, `Cookie3`, `Bread2`, `Egg2`, `Cheese2`, `Apple2`, `Banana2`, `Carrot2`, `ChiliPepper`, `Utensils2`, `ChefHat2`, `Restaurant2`, `Menu3`

## Weather (additions) (20)

`SunDim`, `SunMedium`, `Moon2`, `MoonStars`, `CloudSun2`, `CloudMoon2`, `CloudRain2`, `CloudSnow2`, `CloudLightning2`, `CloudFog2`, `CloudDrizzle2`, `Tornado2`, `Hurricane2`, `Rainbow2`, `Umbrella2`, `Windsock`, `Thermometer4`, `Humidity`, `Pressure`, `Uv`

## Health / Medical (21)

`Heartbeat2`, `Pulse2`, `Stethoscope2`, `Syringe2`, `Pill2`, `Capsule2`, `Bandage2`, `FirstAid2`, `Ambulance2`, `HospitalAlt`, `Wheelchair2`, `Tooth2`, `Brain2`, `Lungs2`, `Bone2`, `Virus2`, `Bacteria2`, `Vaccine2`, `Dna3`, `Mask2`, `Crutch`

## Education / Office (23)

`GraduationCap2`, `Certificate3`, `Backpack2`, `Notebook3`, `Notepad2`, `Ruler2`, `Triangle3`, `Compass3`, `Calculator3`, `Abacus`, `Globe3`, `Atlas2`, `Dictionary`, `Encyclopedia`, `Bookmark3`, `BookOpen3`, `Library2`, `Lecture`, `Whiteboard2`, `Presentation2`, `Easel`, `Microscope3`, `Flashcard`

## Sports / Activity (23)

`Trophy2`, `Medal2`, `Award2`, `Ribbon2`, `Dumbbell2`, `Barbell`, `Treadmill`, `Running2`, `Cycling2`, `Swimming2`, `Basketball2`, `Football3`, `Soccer2`, `Tennis2`, `Baseball2`, `Golf2`, `Bowling2`, `Boxing2`, `Skateboard2`, `Surfboard`, `Dartboard`, `Whistle2`, `Stopwatch3`

## Home / Real estate (24)

`HouseAlt`, `Building3`, `Apartment2`, `Office2`, `Factory3`, `Warehouse2`, `Hotel2`, `Cabin`, `Castle2`, `Lighthouse`, `Door2`, `DoorOpen2`, `Window2`, `Stairs2`, `Elevator2`, `Furniture`, `Sofa2`, `Bed3`, `Bathtub2`, `Shower2`, `Toilet2`, `Kitchen`, `Fireplace`, `Garden`

## Accessibility / Misc symbols (28)

`Accessibility2`, `SignLanguage`, `BrailleIcon`, `HearingAid`, `EyeglassesAlt`, `WalkingCane`, `ServiceDog`, `AudioDescription`, `Infinity2`, `Percentage2`, `Hashtag2`, `Asterisk2`, `AmpersandIcon`, `CopyrightAlt`, `Trademark2`, `RegisteredMark`, `SectionSign`, `ParagraphMark`, `DegreeSign`, `PlusMinus`, `NotEqual`, `ApproxEqual`, `LessThanEqual`, `GreaterThanEqual`, `SquareRoot`, `Pi2`, `Sigma2`, `Integral`

## Extra dev / agent (30)

`AiSparkles`, `SparklesAlt`, `RobotFace`, `ChatbotIcon`, `PromptIcon`, `TokenCount`, `ContextWindow`, `EmbeddingIcon`, `VectorDb`, `NeuralNet`, `ModelIcon`, `FineTune`, `InferenceIcon`, `GpuCluster`, `LlmChip`, `AgentIcon`, `WorkflowIcon`, `StateMachine`, `DecisionTree`, `FlowChart`, `Sitemap2`, `MindMap`, `OrgChart`, `NodeGraph`, `DiagramIcon`, `BlueprintIcon`, `WireframeIcon`, `MockupIcon`, `PrototypeIcon`, `ComponentTree`

## More UI controls (31)

`SearchPlus`, `SearchMinus`, `SearchCheck`, `SearchX`, `SearchCode`, `FilterPlus`, `FilterX`, `FilterCheck`, `SortAlpha`, `SortNumeric`, `SortClock`, `ZoomIn2`, `ZoomOut2`, `ZoomReset`, `ScanLine`, `ScrollUp`, `ScrollDown`, `ResizeHandle`, `GripVertical`, `GripHorizontal`, `DotsGrid`, `MoreHorizontal2`, `MoreVertical2`, `ExpandIcon`, `CollapseIcon`, `PinTab`, `UnpinTab`, `NewTab`, `CloseTab`, `DuplicateTab`, `SplitScreen`

## More files/data (29)

`FileGit`, `FileTerminal`, `FileBinary`, `FileDiff`, `FileSpreadsheet`, `FileDatabase`, `FileCertificate`, `FileSignature`, `FileVersion`, `FileHistory`, `FileTree`, `FileSymbol`, `FolderTree`, `FolderCloud`, `FolderDownload`, `FolderUpload`, `FolderConfig`, `FolderSecure`, `Backup2`, `Restore2`, `ArchiveBox`, `UnarchiveIcon`, `TrashRestore`, `ExportData`, `ImportData`, `SyncFiles`, `MergeFiles`, `CompareFiles`, `SplitFile`

## More comms (25)

`SlackHash`, `DiscordHash`, `ThreadReply`, `PinMessage`, `UnpinMessage`, `MuteConversation`, `ArchiveChat`, `MarkRead`, `MarkUnread`, `StarMessage`, `FlagMessage`, `TranslateMessage`, `ScheduleSend`, `DraftMessage`, `TypingIndicator`, `ReadReceipt`, `DeliveredCheck`, `EmojiPicker`, `GifIcon`, `StickerIcon`, `VoiceMessage`, `ScreenShare2`, `RaiseHand`, `LeaveCall`, `JoinCall`

## More dev ops (30)

`PipelineRun`, `PipelineFail`, `PipelinePass`, `BuildSuccess`, `BuildFail`, `BuildPending`, `TestPass`, `TestFail`, `TestSkip`, `CoverageIcon`, `ReleaseIcon`, `RollbackIcon`, `HotfixIcon`, `FeatureFlag`, `CanaryDeploy`, `BlueGreen`, `ScaleUp`, `ScaleDown`, `AutoScale`, `HealthCheck`, `Heartbeat3`, `Latency`, `Throughput`, `Bandwidth`, `Traffic2`, `RateLimit`, `Throttle`, `CircuitBreaker`, `Retry2`, `Fallback`

## More data/analytics (30)

`RealtimeData`, `BatchJob`, `StreamData`, `DataPipeline`, `DataLake`, `DataWarehouse`, `EtlIcon`, `SchemaIcon`, `PrimaryKey`, `ForeignKey`, `IndexIcon`, `QueryIcon`, `JoinTables`, `NormalizeData`, `DenormalizeData`, `DataMigration`, `DataExport2`, `DataImport2`, `DataSync2`, `DataClean`, `Anonymize`, `DataMask`, `RowIcon`, `ColumnIcon`, `CellIcon`, `DataPoint`, `Outlier`, `Correlation`, `Regression`, `Classification`

## More security (28)

`ZeroTrust`, `ThreatIcon`, `VulnerabilityIcon`, `PatchIcon`, `AuditLog`, `ComplianceIcon`, `GdprIcon`, `ConsentIcon`, `DataBreach`, `MalwareIcon`, `PhishingIcon`, `RansomwareIcon`, `DdosIcon`, `PenTest`, `SecurityScan`, `KeyRotation`, `SecretVault`, `ApiKey`, `AccessToken`, `RefreshToken`, `SessionIcon`, `CookieIcon`, `SameSite`, `CorsIcon`, `RateGuard`, `WafIcon`, `SandboxIcon`, `QuarantineIcon`

## More layout/design (8)

`ColorPicker2`, `GradientIcon`, `OpacityIcon`, `ContrastIcon`, `SaturationIcon`, `HueIcon`, `EyedropperAlt`, `PaintBucket2`
